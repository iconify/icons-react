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
		"content": `<style>.je84shrcs {
  fill: currentColor;
  d: path("M6.45 15q1.125-.5 2.3-.75t2.375-.25q.75 0 1.488.1t1.462.3q1.25.35 1.913.475T17.4 15h.15l1.2-11H5.25zM5.2 22L3 2h18l-2.2 20z");
}
</style><path class="je84shrcs"/>`,
		"fallback": "material-symbols:water-loss-sharp",
	});
}

export default Component;
