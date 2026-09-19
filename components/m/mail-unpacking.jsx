import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/eogixiblz.css';
import '../../css/h/hzgy6wbai.css';
import '../../css/r/r__g_caqu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="eogixiblz"/><path class="hzgy6wbai"/><path class="r__g_caqu"/></g>`,
		"fallback": "icon-park:mail-unpacking",
	});
}

export default Component;
