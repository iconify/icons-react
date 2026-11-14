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
		"content": `<style>.atamfghal {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.138 4.25H8.05q-2.635 0-3.275 2.556l-2.188 8.75q-.399 1.598.614 2.896q1.014 1.298 2.661 1.298H15.95q2.635 0 3.275-2.556l2.188-8.75q.399-1.598-.614-2.896q-1.014-1.298-2.661-1.298m-6.707 3.012q.037-.044.081-.081q.113-.098.255-.144t.291-.035t.281.079t.23.181Q15.75 10.973 15.75 13q0 3.75-3.75 3.75T8.25 13q0-2.027 3.181-5.738");
}
</style><path class="atamfghal"/>`,
		"fallback": "uix-solid:pee-pad",
	});
}

export default Component;
