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
		"content": `<style>.z9dswht3u {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.303 2.808q.586.586.586 1.414q0 .829-.586 1.414l-.53.53q-.53.531 0 1.061t1.061 0l.53-.53q.585-.586 1.414-.586t1.414.586q.586.585.586 1.414t-.586 1.414l-2.386 2.386q-.884.884-2.121.707l-1.032-.146q-.32-.046-.604-.163q-.198.376-.574.751l-1.415 1.415q-.375.376-.751.574q.117.284.163.604l.146 1.032q.177 1.237-.707 2.121l-2.386 2.386q-.585.586-1.414.586t-1.414-.586t-.586-1.414t.586-1.414l.53-.53q.53-.531 0-1.061q-.531-.53-1.061 0l-.53.53q-.585.586-1.414.586q-.828 0-1.414-.586t-.586-1.414t.586-1.414l2.386-2.386q.884-.884 2.121-.708l1.033.148q.319.045.603.162q.198-.376.574-.751l1.415-1.415q.375-.376.751-.574q-.117-.284-.162-.603l-.148-1.033q-.176-1.237.708-2.121l2.386-2.386q.585-.586 1.414-.586q.828 0 1.414.586");
}
</style><path class="z9dswht3u"/>`,
		"fallback": "uix-solid:open-end-wrench",
	});
}

export default Component;
