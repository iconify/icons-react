import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v8cs3bcys {
  fill: currentColor;
  d: path("M12.225 4.462C9.89 3.142 7 4.827 7 7.508V24.5c0 2.682 2.892 4.368 5.226 3.045l14.997-8.498c2.367-1.341 2.366-4.751 0-6.091z");
}
</style><path class="v8cs3bcys"/>`,
		"fallback": "fluent:play-32-filled",
	});
}

export default Component;
