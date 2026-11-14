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
		"content": `<style>.pgkz6j6nc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 7.999q-.001-1.962 3.113-3.174Q8.13 3.749 12 3.749t6.637 1.076q3.115 1.212 3.113 3.174v3.002q-.002 1.962-3.115 3.172q-2.767 1.076-6.635 1.076t-6.635-1.076Q2.252 12.963 2.25 11zm1.5 2.365V11q.001.936 2.159 1.775q2.505.974 6.091.974t6.091-.974q2.158-.839 2.159-1.776v-.635q-.661.44-1.613.811Q15.87 12.251 12 12.251t-6.637-1.076q-.952-.371-1.613-.811m.5 8.386q0-2.25 2.25-2.25h11q2.25 0 2.25 2.25T17.5 21h-11q-2.25 0-2.25-2.25");
}
</style><path class="pgkz6j6nc"/>`,
		"fallback": "uix-solid:robot-vacuum-brush",
	});
}

export default Component;
