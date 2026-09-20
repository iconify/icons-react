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
		"content": `<style>.iddeoca8i {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v3.6a5.5 5.5 0 0 1 1-.393V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.207q-.149.524-.393 1H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm5 3.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H11zm-1 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.5 1.88a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25m0-4.877c-1.048 0-1.864.818-1.853 1.955a.5.5 0 1 0 1-.01c-.006-.579.36-.945.853-.945c.472 0 .853.392.853.95c0 .202-.07.315-.36.544l-.277.215C5.21 14.616 5 14.929 5 15.5a.5.5 0 0 0 .992.09l.011-.156c.017-.148.1-.254.346-.448l.277-.215c.513-.41.727-.732.727-1.318c0-1.104-.822-1.95-1.853-1.95");
}
</style><path class="iddeoca8i"/>`,
		"fallback": "fluent:shifts-question-mark-20-regular",
	});
}

export default Component;
