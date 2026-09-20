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
		"content": `<style>.q1e_webxn {
  fill: currentColor;
  d: path("M8 18v-2H6v-2h2v-2h2v2h2v2h-2v2zm-3.95 1.95Q2 17.9 2 15t2.05-4.95T9 8t4.95 2.05T16 15t-2.05 4.95T9 22t-4.95-2.05m8.488-1.412Q14 17.074 14 15t-1.463-3.537T9 10t-3.537 1.463T4 15t1.463 3.538T9 20t3.538-1.463M16.95 15.7q.05-.15.05-.325V15q0-3.325-2.337-5.662T9 7h-.375q-.175 0-.325.05q.65-2.2 2.463-3.625T15 2q2.9 0 4.95 2.05T22 9q0 2.425-1.425 4.238T16.95 15.7");
}
</style><path class="q1e_webxn"/>`,
		"fallback": "material-symbols:masked-transitions-add-outline-sharp",
	});
}

export default Component;
