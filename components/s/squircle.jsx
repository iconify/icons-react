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
		"content": `<style>.jum3tqgyk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1.75q6.686 0 8.468 1.782T22.25 12t-1.782 8.468T12 22.25t-8.468-1.782T1.75 12t1.782-8.468T12 1.75");
}
</style><path class="jum3tqgyk"/>`,
		"fallback": "uix-solid:squircle",
	});
}

export default Component;
