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
		"content": `<style>.nqaqhdbvw {
  fill: currentColor;
  d: path("M2 22h20V2zm18-2H6.83L20 6.83z");
}
</style><path class="nqaqhdbvw"/>`,
		"fallback": "ic:sharp-signal-cellular-0-bar",
	});
}

export default Component;
