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
		"content": `<style>.gzpdz6eya {
  fill: currentColor;
  d: path("M4.5 10a.5.5 0 0 0-1 0a5.5 5.5 0 0 0 5 5.478V17.5a.5.5 0 0 0 1 0v-.196a3.5 3.5 0 0 1-.354-2.806L9 14.5A4.5 4.5 0 0 1 4.5 10m10 0c0 .706-.133 1.38-.375 2h-1.093c.3-.602.468-1.282.468-2a.5.5 0 0 1 1 0M12 10a3 3 0 0 1-6 0V5a3 3 0 0 1 6 0zm.5 3a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5");
}
</style><path class="gzpdz6eya"/>`,
		"fallback": "fluent:mic-link-20-filled",
	});
}

export default Component;
