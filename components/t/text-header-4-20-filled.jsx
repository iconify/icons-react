import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t_c1h2b8d {
  fill: currentColor;
  d: path("M8.75 4a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V10.5H3v4.75a.75.75 0 0 1-1.5 0V4.75a.75.75 0 0 1 1.5 0V9h5V4.75A.75.75 0 0 1 8.75 4m7.033.33c.595-.628 1.718-.227 1.718.698V12h1.248l.076.004a.75.75 0 0 1 0 1.492l-.076.004h-1.248v1.751a.75.75 0 0 1-1.5 0V13.5h-4.535a1 1 0 0 1-.83-1.559l5.036-7.47zM12.406 12h3.595V6.664z");
}
</style><path class="t_c1h2b8d"/>`,
		"fallback": "fluent:text-header-4-20-filled",
	});
}

export default Component;
