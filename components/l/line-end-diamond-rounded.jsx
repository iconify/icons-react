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
		"content": `<style>.g5e6slict {
  fill: currentColor;
  d: path("M14.435 16.204L10.73 12.5H3.577q-.213 0-.357-.143T3.077 12t.143-.357t.357-.143h7.154l3.704-3.704q.242-.242.565-.242t.566.242l3.638 3.638q.242.243.242.566t-.242.566l-3.639 3.638q-.242.242-.565.242t-.565-.242");
}
</style><path class="g5e6slict"/>`,
		"fallback": "material-symbols-light:line-end-diamond-rounded",
	});
}

export default Component;
