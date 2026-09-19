import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tot9bk2ec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.315 5.507l2.369 2.369L7.866 23.694l-2.37-2.369zm18.82 18.802l2.369 2.369l-15.818 15.818l-2.37-2.37zM16.101 5.964l2.37 2.368L8.322 18.48l-2.369-2.368zM39.67 29.515l2.368 2.369L31.89 42.03l-2.369-2.369zm-7.45 2.705L15.78 15.78m21.18 21.18l2.84 2.84M11.04 11.04L8.2 8.2");
}
</style><path class="tot9bk2ec"/>`,
		"fallback": "arcticons:justanotherworkouttimer",
	});
}

export default Component;
