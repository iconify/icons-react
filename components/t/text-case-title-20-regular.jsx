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
		"content": `<style>.w-u9t4bcs {
  fill: currentColor;
  d: path("M12.5 3.5a.5.5 0 0 1 .5.5v4.891C13.53 8.337 14.232 8 15 8c1.657 0 3 1.567 3 3.5S16.657 15 15 15c-.768 0-1.47-.337-2-.891v.391a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5M15 14c.966 0 2-.97 2-2.5S15.966 9 15 9s-2 .97-2 2.5s1.034 2.5 2 2.5M6.957 3.836a.5.5 0 0 0-.94-.013L3.293 11h-.02v.054l-1.24 3.269a.5.5 0 0 0 .935.354L3.984 12h4.754l.926 2.664a.5.5 0 1 0 .945-.328zM4.363 11l2.1-5.537L8.39 11z");
}
</style><path class="w-u9t4bcs"/>`,
		"fallback": "fluent:text-case-title-20-regular",
	});
}

export default Component;
