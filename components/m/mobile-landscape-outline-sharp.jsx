import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cmt6ivb0l {
  fill: currentColor;
  d: path("M1 19V5h5.1V4h4.8v1H23v14zm20-2V7H3v10zM3 17V7zm2.713-4.288Q6 12.425 6 12t-.288-.712T5 11t-.712.288T4 12t.288.713T5 13t.713-.288");
}
</style><path class="cmt6ivb0l"/>`,
		"fallback": "material-symbols:mobile-landscape-outline-sharp",
	});
}

export default Component;
