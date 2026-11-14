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
		"content": `<style>.jnovakiir {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.804 4.75q.348-2.25 2.946-2.25q3 0 3 3t-3 3q-2.598 0-2.946-2.25H10.75v.604q1 .323 1 1.646q0 .255-.037.472q1.514.416 2.706 1.609Q16.25 12.411 16.25 15t-1.831 4.419T10 21.25t-4.419-1.831Q3.75 17.589 3.75 15t1.831-4.419q1.192-1.193 2.706-1.609q-.037-.217-.037-.472q0-1.323 1-1.646V5.5q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043T10 4.75z");
}
</style><path class="jnovakiir"/>`,
		"fallback": "uix-solid:perfume-atomizer",
	});
}

export default Component;
