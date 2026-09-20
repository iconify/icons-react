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
		"content": `<style>.ki24w_bkh {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M12 12s2.813-4.634 2.813-6.188a2.812 2.812 0 0 0-5.626 0C9.187 7.366 12 12 12 12m0 0s-4.634 2.813-6.188 2.813a2.812 2.812 0 0 1 0-5.626C7.366 9.187 12 12 12 12m0 0s4.634-2.813 6.187-2.813a2.812 2.812 0 1 1 0 5.626C16.634 14.813 12 12 12 12m0 0s2.813 4.634 2.813 6.187a2.812 2.812 0 0 1-5.626 0C9.187 16.634 12 12 12 12");
}
</style><path clip-rule="evenodd" class="ki24w_bkh"/>`,
		"fallback": "token-branded:noia",
	});
}

export default Component;
