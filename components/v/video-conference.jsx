import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/p/powyxpbom.css';
import '../../css/d/dd8j3ny1z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqT2tmbAy"><g class="wwvp95byt"><path class="powyxpbom"/><path class="dd8j3ny1z"/></g></mask></defs><path mask="url(#SVGqT2tmbAy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:video-conference",
	});
}

export default Component;
