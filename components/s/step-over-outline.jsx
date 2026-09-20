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
		"content": `<style>.isacr0boa {
  fill: currentColor;
  d: path("M9.875 18.125Q9 17.25 9 16t.875-2.125T12 13t2.125.875T15 16t-.875 2.125T12 19t-2.125-.875M4.075 12q.35-2.975 2.6-4.988T11.975 5q1.825 0 3.375.738T18 7.75V5h2v7h-7v-2h4.2q-.8-1.35-2.162-2.175T12 7Q9.8 7 8.125 8.425T6.1 12z");
}
</style><path class="isacr0boa"/>`,
		"fallback": "material-symbols:step-over-outline",
	});
}

export default Component;
