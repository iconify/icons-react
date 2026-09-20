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
		"content": `<style>.uf9hq3jaq {
  fill: currentColor;
  d: path("M13.302 3.525a5.071 5.071 0 1 1 7.172 7.172l-9.778 9.778a5.071 5.071 0 0 1-7.172-7.172zm6.111 1.061a3.57 3.57 0 0 0-5.05 0l-4.359 4.359l5.05 5.05l4.36-4.359a3.57 3.57 0 0 0 0-5.05m-8.606 13.691a.75.75 0 0 0-1.06-1.06l-1.441 1.44a1.5 1.5 0 0 1-2.1.022l-.017-.016a.75.75 0 1 0-1.039 1.082l.017.016a3 3 0 0 0 4.2-.043z");
}
</style><path class="uf9hq3jaq"/>`,
		"fallback": "fluent:pill-24-filled",
	});
}

export default Component;
