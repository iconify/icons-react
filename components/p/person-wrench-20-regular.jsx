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
		"content": `<style>.z1e332g6m {
  fill: currentColor;
  d: path("M6 6a4 4 0 1 1 8 0c0 2.198-1.816 4-4 4a4 4 0 0 1-4-4m5.226 5H5.01A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797c.811.517 1.801.861 2.89 1.045a2.5 2.5 0 0 1 .062-1.005c-.937-.168-1.76-.466-2.414-.884C4.623 15.283 4 14.31 4 13c0-.553.448-1 1.009-1h5.985q.06-.511.232-1M10 3a3 3 0 1 0 0 6a3 3 0 0 0 0-6m5.892 6.024c.366.042.471.48.21.742l-.975.975a1.507 1.507 0 1 0 2.132 2.132l.975-.975c.261-.261.7-.156.742.21a3.518 3.518 0 0 1-4.676 3.723l-2.726 2.727a1.507 1.507 0 1 1-2.132-2.132l2.726-2.726a3.518 3.518 0 0 1 3.724-4.676");
}
</style><path class="z1e332g6m"/>`,
		"fallback": "fluent:person-wrench-20-regular",
	});
}

export default Component;
