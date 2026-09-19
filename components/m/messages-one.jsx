import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m2blynbna.css';
import '../../css/p/p4skm9fjy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9cPLNZWq"><g class="s9cl3zbei"><path class="m2blynbna"/><path class="p4skm9fjy"/></g></mask></defs><path mask="url(#SVG9cPLNZWq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:messages-one",
	});
}

export default Component;
