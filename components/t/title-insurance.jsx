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
		"content": `<style>.bz4ra1bqi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m12.279 1.804l7.5 3q.104.041.191.112q.088.07.151.164q.063.093.096.2t.033.22V11q0 7.214-7.915 11.171q-.078.039-.163.059t-.172.02t-.172-.02t-.163-.059Q3.75 18.214 3.75 11V5.5q0-.112.033-.22q.033-.107.096-.2t.151-.164q.087-.071.191-.112l7.5-3q.135-.054.279-.054t.279.054m2.596 4.446h-5.75q-1.875 0-1.875 1.875q0 1.369 1 1.739v3.522q-1 .37-1 1.739Q7.25 17 9.125 17h5.75q1.875 0 1.875-1.875q0-1.369-1-1.739V9.864q1-.37 1-1.739q0-1.875-1.875-1.875m-.625 7V10h-4.5v3.25z");
}
</style><path class="bz4ra1bqi"/>`,
		"fallback": "uix-solid:title-insurance",
	});
}

export default Component;
