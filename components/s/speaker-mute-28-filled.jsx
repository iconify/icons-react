import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l_dvowb3e {
  fill: currentColor;
  d: path("M16.5 4.814c0-1.094-1.307-1.66-2.105-.912l-4.937 4.63a1.75 1.75 0 0 1-1.197.473H5.25A3.25 3.25 0 0 0 2 12.255v3.492a3.25 3.25 0 0 0 3.25 3.25h3.012c.444 0 .872.17 1.196.473l4.937 4.626c.799.748 2.105.182 2.105-.912zm3.282 5.907a.75.75 0 0 0-1.064 1.057l2.218 2.235l-2.215 2.205a.75.75 0 0 0 1.058 1.063l2.218-2.208l2.225 2.209a.75.75 0 1 0 1.056-1.064l-2.22-2.205l2.224-2.234a.75.75 0 0 0-1.063-1.059l-2.222 2.232z");
}
</style><path class="l_dvowb3e"/>`,
		"fallback": "fluent:speaker-mute-28-filled",
	});
}

export default Component;
