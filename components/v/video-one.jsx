import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/p/powyxpbom.css';
import '../../css/f/f7u7zdkiq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGa5vBobWK"><g class="wwvp95byt"><path class="powyxpbom"/><circle class="f7u7zdkiq"/></g></mask></defs><path mask="url(#SVGa5vBobWK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:video-one",
	});
}

export default Component;
