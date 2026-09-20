import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ke3-pqb7f {
  fill: currentColor;
  d: path("M12.98 3.2a1 1 0 1 0-1.96-.4L9.752 9H4a1 1 0 1 0 0 2h5.343l-1.227 6H3a1 1 0 1 0 0 2h4.707L6.52 24.8a1 1 0 1 0 1.96.4L9.748 19h5.959l-1.187 5.8a1 1 0 1 0 1.96.4l1.268-6.2H23a1 1 0 1 0 0-2h-4.843l1.227-6H24a1 1 0 1 0 0-2h-4.207l1.187-5.8a1 1 0 1 0-1.96-.4L17.752 9h-5.959zM16.116 17h-5.959l1.227-6h5.959z");
}
</style><path class="ke3-pqb7f"/>`,
		"fallback": "fluent:number-symbol-28-filled",
	});
}

export default Component;
