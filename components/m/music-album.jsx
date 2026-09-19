import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jqu7zwbyi.css';
import '../../css/x/x5sborb5g.css';
import '../../css/z/zmi2ynitk.css';
import '../../css/w/wo8mbvbvw.css';
import '../../css/c/c0xretbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="jqu7zwbyi"/><path class="x5sborb5g"/><path class="zmi2ynitk"/><circle class="wo8mbvbvw"/><circle class="c0xretbrj"/></g>`,
		"fallback": "akar-icons:music-album",
	});
}

export default Component;
