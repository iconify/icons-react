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
		"content": `<style>.kb98lpblo {
  fill: currentColor;
  d: path("M7.039 16.5v-1h1v1zm9.461 0v-1h3.385q.269 0 .442-.173t.173-.442v-1.77q0-.269-.173-.442t-.443-.173H16.5v-5h5v1h-4v3h2.385q.69 0 1.152.463t.463 1.153v1.769q0 .69-.463 1.153t-1.152.462zm-6.73 0v-3.384q0-.691.462-1.153t1.153-.463h1.769q.269 0 .442-.173t.173-.442v-1.77q0-.269-.173-.442t-.442-.173H9.769v-1h3.385q.69 0 1.153.463t.462 1.153v1.769q0 .69-.462 1.153t-1.153.462h-1.77q-.268 0-.442.173q-.173.173-.173.443V15.5h4v1zm-5.462 0v-8H2.5v-1h2.808v9z");
}
</style><path class="kb98lpblo"/>`,
		"fallback": "material-symbols-light:speed-1-25-outline",
	});
}

export default Component;
