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
		"content": `<style>.ak-r0lb6e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.75 3.75h-14q-2.5 0-2.5 2.5v1.5q0 .652.17 1.134q-.519.179-.938.598q-.732.732-.732 1.768v1.5q0 1.036.732 1.768q.242.242.517.403q-.249.54-.249 1.329v1.5q0 2.5 2.5 2.5h14.5q1.036 0 1.768-.732t.732-1.768v-1.5q0-2.347-2.204-2.491q.204-.462.204-1.009v-1.5q0-.579-.134-1.024q.802-.109 1.402-.708q.732-.732.732-1.768v-1.5q0-1.036-.732-1.768T19.75 3.75m-6.829 2.915l.949 1.898q.451.903.076 1.84l-.848 2.122l.699 4.198q.151.919-.746 1.17q-.898.252-1.247-.615l-.777-1.943q-.335-.835 0-1.671l.522-1.306l-.829-4.978q-.166-.993.792-1.305t1.409.59");
}
</style><path class="ak-r0lb6e"/>`,
		"fallback": "uix-solid:shale-layer",
	});
}

export default Component;
