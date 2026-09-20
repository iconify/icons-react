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
		"content": `<style>.soa0cpbrl {
  fill: currentColor;
  d: path("M5.752 18.448q-1.304-1.31-2.037-2.971q-.734-1.661-.734-3.508t.711-3.527t2.06-2.97l.733.712Q5.277 7.31 4.629 8.811t-.648 3.139t.66 3.14t1.844 2.645zm3.041-1.241Q8.5 16.913 8.5 16.5t.293-.707t.707-.293t.707.293t.293.707t-.293.707t-.707.293t-.707-.293m4.682-4.707v-2.16l-1.852 1.093l-.5-.866L12.975 9.5l-1.852-1.067l.5-.866l1.852 1.092V6.5h1v2.16l1.852-1.093l.5.866L14.975 9.5l1.852 1.067l-.5.866l-1.852-1.092V12.5zm4.754 5.948l-.733-.713q1.208-1.125 1.856-2.636q.648-1.51.648-3.149t-.66-3.13t-1.844-2.635l.733-.714q1.304 1.31 2.037 2.981q.734 1.671.734 3.517t-.721 3.527t-2.05 2.952");
}
</style><path class="soa0cpbrl"/>`,
		"fallback": "material-symbols-light:regular-expression-outline",
	});
}

export default Component;
