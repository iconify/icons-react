import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nqfxi3m4a.css';
import '../../css/t/tz4emgb9r.css';
import '../../css/l/l4duz-dfx.css';
import '../../css/z/z2iqbq9uf.css';
import '../../css/c/cf0six4tt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nqfxi3m4a"/><path clip-rule="evenodd" class="tz4emgb9r"/><path class="l4duz-dfx"/><path clip-rule="evenodd" class="z2iqbq9uf"/><path class="cf0six4tt"/></g>`,
		"fallback": "glyphs:tachometer-9-outline",
	});
}

export default Component;
