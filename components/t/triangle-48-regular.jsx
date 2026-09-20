import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fzghtxbup {
  fill: currentColor;
  d: path("M25.758 8.435c-.652-1.239-2.422-1.249-3.088-.017L6.717 37.919a1.75 1.75 0 0 0 1.539 2.583h31.487a1.75 1.75 0 0 0 1.549-2.566zm-5.287-1.207c1.617-2.99 5.916-2.966 7.5.042l15.533 29.502c1.49 2.83-.562 6.23-3.76 6.23H8.255c-3.22 0-5.27-3.44-3.738-6.272z");
}
</style><path class="fzghtxbup"/>`,
		"fallback": "fluent:triangle-48-regular",
	});
}

export default Component;
