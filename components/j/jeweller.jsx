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
		"content": `<style>.duu86_byz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m9.617 2.347l-1.75 2.75q.051-.079.12-.144t.152-.11q.083-.046.175-.069T8.5 4.75h7q.095 0 .186.023q.092.024.175.069t.152.11t.119.145l-1.749-2.75q-.051-.079-.12-.144t-.152-.11t-.175-.069Q13.845 2 13.75 2h-3.5q-.095 0-.186.024q-.092.023-.175.069q-.083.045-.152.11t-.12.144m6.431 3.665q-.106.114-.249.176t-.299.062h-7q-.156 0-.299-.062t-.249-.176l2.095 2.245q-1.675.469-2.998 1.792Q4.999 12.1 5 15q-.001 2.9 2.049 4.951Q9.1 22.002 12 22.002t4.951-2.051Q19.001 17.9 19 15q.001-2.9-2.049-4.951q-1.323-1.323-2.998-1.792z");
}
</style><path class="duu86_byz"/>`,
		"fallback": "uix-solid:jeweller",
	});
}

export default Component;
