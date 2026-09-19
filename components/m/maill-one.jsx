import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m2blynbna.css';
import '../../css/o/o2ir8p9au.css';
import '../../css/k/k4pywfg3u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGr4wA8dyJ"><g class="s9cl3zbei"><path class="m2blynbna"/><path class="o2ir8p9au"/><path class="k4pywfg3u"/></g></mask></defs><path mask="url(#SVGr4wA8dyJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:maill-one",
	});
}

export default Component;
