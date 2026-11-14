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
		"content": `<style>.scxw-dbbg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.301 2.25h-.602q-1.015 0-1.687.761q-.671.761-.545 1.768l.125 1q.093.749.439 1.214q-.35.459-.451 1.203l-1.222 8.966q-.151 1.105.638 1.894l1.413 1.413q.659.66 1.591.66t1.591-.66l1.414-1.413q.788-.789.637-1.894L14.42 8.195q-.101-.743-.451-1.202q.346-.465.439-1.214l.125-1q.126-1.007-.545-1.768q-.672-.761-1.687-.761");
}
</style><path class="scxw-dbbg"/>`,
		"fallback": "uix-solid:menswear-department",
	});
}

export default Component;
