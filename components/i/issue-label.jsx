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
		"content": `<style>.wnpjcjzmo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19 5.25H8q-.167 0-.318.071t-.258.199l-5 6q-.042.05-.074.107q-.033.056-.055.118t-.034.125q-.011.065-.011.13t.011.13t.034.125q.022.062.055.118q.032.057.074.107l5 6q.107.128.258.199T8 18.75h11q2.75 0 2.75-2.75V8q0-2.75-2.75-2.75M6.25 12q0-2.25 2.25-2.25T10.75 12T8.5 14.25T6.25 12");
}
</style><path class="wnpjcjzmo"/>`,
		"fallback": "uix-solid:issue-label",
	});
}

export default Component;
