import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nl0xqgboa {
  fill: currentColor;
  d: path("M2 3.5A1.5 1.5 0 0 1 3.5 2h13A1.5 1.5 0 0 1 18 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-6v3.293l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L9.5 16.293V13h-6A1.5 1.5 0 0 1 2 11.5zm3.502 2.505a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505m6 0a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505M5.5 10a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm8.25-4.748a.752.752 0 1 0 1.505 0a.752.752 0 0 0-1.505 0m-7.505 2.5a.752.752 0 1 0 1.505 0a.752.752 0 0 0-1.505 0m3.757.753a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505m2.253-.753a.752.752 0 1 0 1.504 0a.752.752 0 0 0-1.504 0M8.502 6.005a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505");
}
</style><path class="nl0xqgboa"/>`,
		"fallback": "fluent:keyboard-dock-20-filled",
	});
}

export default Component;
