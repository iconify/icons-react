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
		"content": `<style>.d1eslcbkn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.139 2.366L2.366 7.139q-2.386 2.386-.001 4.772l.531.531q.988.989 2.387.989q1.398 0 2.386-.989l.85-.849q.184.292.476.583l7.071 7.072q.659.66 1.591.66t1.591-.659q.66-.66.66-1.592t-.66-1.591l-7.072-7.071q-.291-.292-.583-.476l.849-.85q.989-.988.989-2.387q0-1.398-.989-2.387l-.531-.529q-2.386-2.386-4.772 0");
}
</style><path class="d1eslcbkn"/>`,
		"fallback": "uix-solid:sledgehammer",
	});
}

export default Component;
