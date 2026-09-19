import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/v/v988xccny.css';
import '../../css/v/vkdx382ki.css';
import '../../css/v/v8cds7a2u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGp6RUMcqi"><g class="wwvp95byt"><path class="v988xccny"/><path class="vkdx382ki"/><path class="v8cds7a2u"/></g></mask></defs><path mask="url(#SVGp6RUMcqi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:power-supply-one",
	});
}

export default Component;
