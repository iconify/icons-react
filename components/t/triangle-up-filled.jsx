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
		"content": `<style>.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.si42fdqfd {
  d: path("M9.134 4.501a1 1 0 0 1 1.732 0l5.769 10A1 1 0 0 1 15.769 16H4.23a1 1 0 0 1-.866-1.5z");
}

.zmle5ph7m {
  d: path("M16.635 14.5a1 1 0 0 1-.866 1.5H4.23a1 1 0 0 1-.866-1.5l5.769-9.999a1 1 0 0 1 1.732 0zM10 9.003L7.694 13h4.612z");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="si42fdqfd"/><path class="zmle5ph7m"/></g>`,
		"fallback": "pepicons-pop:triangle-up-filled",
	});
}

export default Component;
