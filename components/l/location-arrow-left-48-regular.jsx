import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bsqc4hbhb {
  fill: currentColor;
  d: path("M22.884 16.884a1.25 1.25 0 0 0-1.768-1.768l-5 5a1.25 1.25 0 0 0 0 1.768l5 5a1.25 1.25 0 0 0 1.768-1.768l-2.866-2.866H31a1.25 1.25 0 1 0 0-2.5H20.018zm4.028 25.825L37 32h-.038l.017-.02l.021-.025A16.92 16.92 0 0 0 41 21c0-9.389-7.611-17-17-17S7 11.611 7 21a16.92 16.92 0 0 0 4 10.955l.021.025l.017.02H11l10.088 10.71a4 4 0 0 0 5.823 0M38.5 21a14.43 14.43 0 0 1-3.443 9.381l-.308.363l-9.657 10.251a1.5 1.5 0 0 1-2.184 0l-9.657-10.251l-.308-.363A14.43 14.43 0 0 1 9.5 21c0-8.008 6.492-14.5 14.5-14.5S38.5 12.992 38.5 21");
}
</style><path class="bsqc4hbhb"/>`,
		"fallback": "fluent:location-arrow-left-48-regular",
	});
}

export default Component;
