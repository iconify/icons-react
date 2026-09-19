import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/st9uts4et.css';
import '../../css/u/ue0lmc99t.css';
import '../../css/b/b50r88b4j.css';
import '../../css/h/hqfzx6bra.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="st9uts4et"/><path class="ue0lmc99t"/><path class="b50r88b4j"/><path class="hqfzx6bra"/></g>`,
		"fallback": "icon-park:upload-laptop",
	});
}

export default Component;
