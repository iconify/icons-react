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
		"content": `<style>.w79lowova {
  fill: currentColor;
  d: path("M20.3 20.3q-.3.3-.712.3t-.713-.3L3.7 5.125q-.3-.3-.3-.712t.3-.713t.712-.3t.713.3L20.3 18.875q.3.3.3.713t-.3.712m-10 0q-.3.3-.712.3t-.713-.3L3.7 15.125q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l5.175 5.175q.3.3.3.713t-.3.712");
}
</style><path class="w79lowova"/>`,
		"fallback": "material-symbols:resize-window-outline-rounded",
	});
}

export default Component;
