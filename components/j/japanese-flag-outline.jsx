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
		"content": `<style>.ud-tqs6vf {
  fill: currentColor;
  d: path("M18 16.11V7.57q-1.673.163-3.315-.202q-1.643-.364-3.016-1.205q-.954-.576-1.932-.867q-.978-.29-1.964-.29q-.408 0-.822.057T6 5.246v8.527q.51-.089.934-.12q.424-.032.831-.032q1.373 0 2.69.371t2.45 1.044q1.19.714 2.476.985T18 16.11m-4.225-3.708q.725-.725.725-1.775t-.725-1.775T12 8.127t-1.775.725t-.725 1.775t.725 1.775t1.775.725t1.775-.725M5 20V4.429q.908-.22 1.537-.324T7.777 4q1.103 0 2.206.328q1.103.327 2.138.938q1.098.661 2.304 1.004t2.471.344q.54 0 1.062-.047q.52-.046 1.061-.096v10.56q-.54.05-1.054.106q-.515.055-1.05.055q-1.171 0-2.277-.311q-1.105-.312-2.134-.929q-1.076-.656-2.26-.996t-2.403-.34q-.504 0-.95.056q-.447.057-.891.103V20zm7-9.31");
}
</style><path class="ud-tqs6vf"/>`,
		"fallback": "material-symbols-light:japanese-flag-outline",
	});
}

export default Component;
