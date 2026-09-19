import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6vzv4bqp.css';
import '../../css/s/s3ckdxwss.css';
import '../../css/v/vbagb8yxb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6vzv4bqp"/><path class="s3ckdxwss"/><path class="vbagb8yxb"/>`,
		"fallback": "carbon:watsonx-ai",
	});
}

export default Component;
