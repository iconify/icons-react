import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ajtg-mbpp {
  fill: var(--svg-color--c3d82e, #c3d82e);
  d: path("M57.55 14.457c9.694 14.11 6.111 33.405-7.998 43.09c-14.11 9.694-33.406 6.113-43.1-8c-9.694-14.11-6.111-33.407 8-43.1c14.11-9.69 33.404-6.108 43.09 8");
}

.k9y7y94aj {
  fill: var(--svg-color--fff, #fff);
  d: path("M45.336 59.995s-14.8-32.978.966-55.494l1.323.73s-16.514 22.624.848 53.076l-3.137 1.69M6.46 49.552S21.043 27.893 17.024 4.869l-1.796 1.235s7.87 6.426-9.891 41.812");
}
</style><path class="ajtg-mbpp"/><path class="k9y7y94aj"/>`,
		"fallback": "emojione-v1:tennis",
	});
}

export default Component;
