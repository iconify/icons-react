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
		"content": `<style>.y_mt39bhs {
  fill: currentColor;
  d: path("M8.214 15.135h7.553l1.925-7.885L12.5 2.464v5.202q.312.153.512.442t.2.661q0 .495-.359.853q-.359.359-.853.359q-.513 0-.872-.359q-.359-.358-.359-.853q0-.373.2-.671t.531-.433v-5.2L6.289 7.25zM5 20l.473-1.317q.162-.452.533-.722t.848-.269h10.292q.477 0 .848.27t.533.72L19 20z");
}
</style><path class="y_mt39bhs"/>`,
		"fallback": "material-symbols-light:stylus-fountain-pen",
	});
}

export default Component;
