import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zy-25wbby.css';
import '../../css/e/e494olp2w.css';
import '../../css/a/a68zt3k5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zy-25wbby"/><path class="e494olp2w"/><path class="a68zt3k5a"/></g>`,
		"fallback": "lucide:snowflake",
	});
}

export default Component;
