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
		"content": `<style>.gchqflbgj {
  fill: currentColor;
  d: path("m9 23l-1-1v-6H3v-2l2-2V5H4V3h7.125Q10.1 4 9.55 5.288T9 8q0 2.625 1.713 4.588T15 14.925V16h-5v6zm3.463-11.462Q11 10.075 11 8t1.463-3.537T16 3t3.538 1.463T21 8t-1.463 3.538T16 13t-3.537-1.463m4.6-3.975q.437-.437.437-1.062t-.437-1.062T16 5t-1.062.438T14.5 6.5t.438 1.063T16 8t1.063-.437m.35 3.075q.637-.363 1.062-.963q-.55-.325-1.175-.5T16 9t-1.3.175t-1.175.5q.425.6 1.062.963T16 11t1.413-.363");
}
</style><path class="gchqflbgj"/>`,
		"fallback": "material-symbols:keep-public",
	});
}

export default Component;
