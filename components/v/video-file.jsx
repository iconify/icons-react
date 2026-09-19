import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/s/seqkjy8_m.css';
import '../../css/k/kemav7bvw.css';
import '../../css/y/ydh9vfl9m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOtV8mbCY"><g class="wwvp95byt"><path class="seqkjy8_m"/><path class="kemav7bvw"/><path class="ydh9vfl9m"/></g></mask></defs><path mask="url(#SVGOtV8mbCY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:video-file",
	});
}

export default Component;
