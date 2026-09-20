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
		"content": `<style>.xd9852bur {
  fill: currentColor;
  d: path("M8 22v-1.75Q5.375 19.2 3.688 17T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12q0 2.8-1.687 5T16 20.25V22zm2-10h4V4.25q-.5-.125-1-.187T12 4t-1 .063t-1 .187zm-6 0h4V5.075Q6.125 6.15 5.063 8T4 12m12 0h4q0-2.15-1.062-4T16 5.075z");
}
</style><path class="xd9852bur"/>`,
		"fallback": "material-symbols:rice-bowl-sharp",
	});
}

export default Component;
