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
		"content": `<style>.p2g7l8b2y {
  fill: currentColor;
  d: path("m14.308 14.046l-2.262 2.262q-.242.242-.546.242t-.546-.242l-8-7.962q-.243-.242-.243-.521t.243-.521l2.338-2.338q.242-.243.533-.243t.533.243l7.95 8.026q.242.242.242.527t-.242.527m3.938 6.908l-3.973-3.973l.708-.708l3.973 3.973q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16M16.544 7.456q-.813-.814-.813-1.956t.813-1.956t1.956-.813t1.956.813t.813 1.956t-.813 1.956t-1.956.813t-1.956-.813");
}
</style><path class="p2g7l8b2y"/>`,
		"fallback": "material-symbols-light:sports-cricket-rounded",
	});
}

export default Component;
